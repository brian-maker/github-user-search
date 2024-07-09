import React from 'react'
import './Card.css'
import location from '../assets/icon-location.svg'
import twitter from '../assets/icon-twitter.svg'
import link from '../assets/icon-website.svg'
import company from '../assets/icon-company.svg'

function Card({user}) {
  return (
    <div className='user-card'>
        <section className='user'>
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} className='user-bg' />

            <div className='details'>
                <div>
                <h2 className='userName'>{user.name}</h2>
                <p className='userLogin'>@{user.login}</p>
                </div>
                
                <p className='date'>Joined {user.created_at}</p>
            </div>
        </section>
        <div className="bio">
            <p>{user.bio }.</p>
        </div>
        <article>
            <div>
                <h5>Repos</h5>
                <p>{user.public_repos}</p>
            </div>
            <div>
                <h5>Followers</h5>
                <p>{user.followers}</p>
            </div>
            <div>
                <h5>Following</h5>
                <p>{user.following}</p>
            </div>
        </article>

        <section className='social-media'>
            <div className='socials'>
                <img src={location} alt="location" />
                <p>{user.location}</p>
            </div>
            <div className='socials'>
                <img src={twitter} alt="twitter" />
                <p>{user.twitter_username}</p>
            </div>
            <div className='socials'>
                <img src={link} alt="company" />
                <p>{user.html_url}</p>
            </div>
            <div className='socials'>
                <img src={company} alt="company" />
                <p>{user.company}</p>
            </div>
        </section>
        
    </div>
  )
}

export default Card