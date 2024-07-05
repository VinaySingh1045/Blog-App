import React, { useState , useEffect } from 'react'
import { Container } from '../components'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'
import PostForm from '../components/post-form/PostForm' 

const EditPost = () => {

    const [post, setPost] = useState([])
    const navigate = useNavigate()
    const { slug } = useParams()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post}/> 
            </Container>
        </div>
    ) : null
}

export default EditPost
