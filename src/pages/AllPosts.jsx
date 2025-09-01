import React , {useState, useEffect} from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'


function AllPosts() {
  const [posts, setPosts] = useState([])
 useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        // console.log("All posts data:", posts.documents); 
        setPosts(posts.documents)
      }
    })
  }, [])

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            
            <div key={post.$id} className='p-2 w-1/4'>
        
                <PostCard 
                  $id={post.$id}
                  title={post.title}
                  featuredImage={post.featuredimage}
                  />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts