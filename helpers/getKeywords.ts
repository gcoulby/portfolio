import { IPost } from './interfaces'

const getKeywords = (posts: IPost[]): string[] => {
  const keywordMap: Map<string, number> = new Map()

  posts.forEach((post) => {
    post.keywords.forEach((keyword) => {
      keywordMap.set(keyword, (keywordMap.get(keyword) || 0) + 1)
    })
  })

  return Array.from(keywordMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map((entry) => entry[0])
}

export default getKeywords
