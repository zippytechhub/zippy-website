import { useRouter } from 'nextjs-toploader/app'

export const useNavigation = () => {
  const router = useRouter()

  const navigate = (route: string) => {
    return router.push(route)
  }
  const replace = (route: string) => {
    return router.replace(route)
  }

  const handleHardRefresh = () => {
    router.refresh() // reloads current page from server
  }
  return {
    navigate,
    handleHardRefresh,
    replace,
  }
}
