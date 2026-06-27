export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const res = await $fetch(`${config.public.directus.url}/items/global`, {
    query: {
      fields: ['portfolio']
    }
  })

  const fileId = res?.data?.portfolio

  if (!fileId) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Portfolio not found'
    })
  }

  return sendRedirect(event, `${config.public.directus.url}/assets/${fileId}`, 302)
})

