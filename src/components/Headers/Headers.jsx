import React from 'react'
import { Container, LogoutBtn } from '../index'
import Logo from '../Logo'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Headers = () => {

  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      status: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
      // ye authStatus = false but in our scenario it is !authstatus = true hai so uska matalb ye dekhega navbar me 
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },

  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />

            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Headers
