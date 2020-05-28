export default async function({ route, store }) {
  await store.dispatch('storeStatics/fetchInfoStatics');
  await store.dispatch('stories/fetchStories');
  await store.dispatch('storeBlocks/fetchBlocks');
  await store.dispatch('storeVideo/fetchVideo');
}
