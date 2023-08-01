import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt"

export const GET = async (request, { params }) => {
  try {
    await connectToDB()

    const prompt = await Prompt.findById(params.promptId).populate('creator')

    if ( ! prompt ) return Response("Prompt not found", {status: 404})
    return new Response(JSON.stringify(prompt), {status: 200})
  } catch (err) {
    return new Response(`Failed to fetch prompt with id: ${params.promptId}`, {status: 500})
  }
}

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json()

  try {
    await connectToDB()

    const existingPrompt = await Prompt.findById(params.promptId)

    if ( ! existingPrompt ) return Response("Prompt not found", {status: 404})

    existingPrompt.prompt = prompt
    existingPrompt.tag = tag

    await existingPrompt.save()
    return new Response(JSON.stringify(prompt), {status: 200})
  } catch (err) {
    return new Response("Failed to update prompt", {status: 500})
  }
}

export const DELETE = async (request, { params }) => {

  try {
    await connectToDB()

    const existingPrompt = await Prompt.findByIdAndRemove(params.promptId)

    return new Response("Prompt deleted successfully", {status: 200})
  } catch (err) {
    return new Response("Failed to delete prompt", {status: 500})
  }
}