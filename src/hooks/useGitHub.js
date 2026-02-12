import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const GITHUB_API_BASE = 'https://api.github.com'
const GITHUB_USERNAME = 'teecoleonard'

/**
 * Hook para buscar repositórios do GitHub com cache profissional
 */
export const useGitHubRepos = () => {
  return useQuery({
    queryKey: ['github-repos', GITHUB_USERNAME],
    queryFn: async () => {
      const response = await axios.get(
        `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos`,
        {
          params: {
            sort: 'updated',
            per_page: 100,
            type: 'owner',
          },
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          }
        }
      )
      return response.data
    },
    staleTime: 1000 * 60 * 30, // 30 minutos
  })
}

/**
 * Hook para buscar estatísticas do usuário GitHub
 */
export const useGitHubUser = () => {
  return useQuery({
    queryKey: ['github-user', GITHUB_USERNAME],
    queryFn: async () => {
      const response = await axios.get(
        `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`,
        {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          }
        }
      )
      return response.data
    },
    staleTime: 1000 * 60 * 60, // 1 hora
  })
}

/**
 * Hook para buscar linguagens de programação mais usadas
 */
export const useGitHubLanguages = () => {
  const reposQuery = useGitHubRepos()

  return useQuery({
    queryKey: ['github-languages', GITHUB_USERNAME],
    queryFn: async () => {
      if (!reposQuery.data) return []

      const languageCounts = {}

      for (const repo of reposQuery.data) {
        if (repo.language) {
          languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1
        }
      }

      return Object.entries(languageCounts)
        .map(([language, count]) => ({ language, count }))
        .sort((a, b) => b.count - a.count)
    },
    enabled: !!reposQuery.data,
  })
}
