import React from 'react'
import apppwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    apppwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if (posts.length === 0){
    return(
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    )
  }
  return (
    <div>Home</div>
  )
}

export default Home