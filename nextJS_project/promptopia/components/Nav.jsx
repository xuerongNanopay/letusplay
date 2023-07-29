"use client"

import Linke from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Link from 'next/link'

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const _setProviders = async () => {
      const response = await getProviders()
      setProviders(response)
    }

    _setProviders()
  }, [])

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image 
          src="/assets/images/logo.svg" 
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      <div className="hidden sm:flex">
        {
          session?.user ? 
          <div className="flex gap-3 md:gap-5">
            <Link
              href="/create-prompt"
              className="black_btn"
            >
              Create Post
            </Link>

            <button 
              type="button"
              onClick={signOut}
              className="outline_btn"
            >
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="round-full"
                alt="profile"
              />
            </Link>
          </div>
          :
          <>
            {
              providers &&
              Object
                .values(providers)
                .map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                  >
                    Sign In
                  </button>
                ))
            }
          </>
        }
      </div>

      {/* mobile */}
      <div
        className="sm:hidden flex relative"
      >
        {
          session?.user ? (
            <div className="flex">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="round-full"
                alt="profile"
                onClick={() => {setToggleDropDown(pre => !pre)}}
              />
              {toggleDropdown && (
                <div className="dropdown">
                  <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => setToggleDropDown(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => setToggleDropDown(false)}
                  >
                    Create Prompt
                  </Link>
                  <button
                    type="button"
                    onClick={_ => {
                      setToggleDropDown(false)
                      signOut()
                    }}
                    className="mt-5 w-full black_btn"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {
                providers &&
                Object
                  .values(providers)
                  .map((provider) => (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                      className="black_btn"
                    >
                      Sign In
                    </button>
                  ))
              }
            </>
          )
        }
      </div>
    </nav>
  )
}

export default Nav