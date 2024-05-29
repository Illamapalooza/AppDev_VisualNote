import express from 'express';
import fs from 'fs';
import openai from '../../utils/openai';
import { filepaths } from '../../utils/saveFile';

export const schema = {
  type: 'object',
  properties: {
    topic: {
      type: 'string',
      description:
        'Briefly outline the overarching topic or subject area covered in the lecture snapshot',
    },
    description: {
      type: 'string',
      description:
        'Describe the overall content of the lecture snapshots captured in the photos. Include details about any diagrams, charts, or text visible in the images to provide context for the model.',
    },
    key_concepts: {
      type: 'array',
      description:
        'Transform the photo into concise bullet points or headings that encapsulate the main ideas presented in the lecture snapshot. Focus on identifying the fundamental concepts discussed.',
      items: {
        type: 'string',
      },
    },
    explanation: {
      type: 'string',
      description:
        'Elaborate on each key concept identified in the previous step. Provide clear, detailed explanations that delve deeper into the topic, clarifying any complex or ambiguous points.',
    },
    examples: {
      type: 'string',
      description:
        'Offer illustrative examples or scenarios related to each key concept. These examples should reinforce understanding and help learners connect theoretical knowledge with real-world applications.',
    },
    resources: {
      type: 'array',
      description:
        'If applicable, specify any resources or materials provided alongside the lecture snapshot, such as slides, textbooks, or additional readings.',
      items: {
        type: 'object',
        properties: {
          url: { type: 'string' },
          title: { type: 'string' },
        },
      },
    },
    exercises: {
      type: 'array',
      description:
        'Create exercises or questions based on the key concepts discussed. These exercises should challenge learners to apply their understanding and critically analyze the material.',
      items: {
        type: 'string',
      },
    },
  },
  required: [
    'topic',
    'description',
    'key_concepts',
    'explanation',
    'examples',
    'resources',
    'exercises',
  ],
};

export const generateNote = async (
  req: express.Request,
  res: express.Response
) => {
  console.log('fetching data from OpenAI');
  try {
    const imagesAsBase64 = filepaths.map((filepath) =>
      fs.readFileSync(filepath, 'base64')
    );
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content:
            " You are an expert note taker and mentor tasked with transforming lecture snapshots into insightful, organized notes. Given photos of lecture snapshots, provide detailed, well-structured notes that capture key concepts, explanations, and examples. Your goal is to enhance understanding and provide clarity, offering insights beyond what is visible in the image. Consider the audience's perspective and aim to create notes that are informative and engaging, facilitating learning and retention.",
        },
        {
          role: 'user',
          content: imagesAsBase64.map((image) => ({
            type: 'image_url',
            image_url: { url: `data:image/png;base64,${image}` },
          })),
        },
      ],
      max_tokens: 1000,
      functions: [
        {
          name: 'get_topic_data',
          parameters: schema,
        },
      ],
      function_call: { name: 'get_topic_data' },
    });
    console.log(response.choices[0]);

    return res
      .status(200)
      .json(response.choices[0].message.function_call.arguments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

export default generateNote;
