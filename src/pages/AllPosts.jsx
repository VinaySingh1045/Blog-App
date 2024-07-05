import React from 'react'
import { Container} from '../components'
import PostCard from '../components/PostCard'
import { useState } from 'react'
import appwriteService from '../appwrite/config'

const AllPosts = () => {
    const [posts, setPosts] = useState([])
  
    appwriteService.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })

  return (
    <div className='w-full py-8'>
    <Container>
    <div className='flex flex-wrap'>
        {posts.map((post)=>(
            <div className='p-2 w-1/4' key={post.$id}>
                <PostCard {...post} />
            </div>
        ))}
    </div>
    </Container>
      
    </div>
  )
}

export default AllPosts
