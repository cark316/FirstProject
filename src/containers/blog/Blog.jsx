import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05} from './import'

const Blog = () => {
  return (
    <div className="mars__blog section__padding">
      <div className="mars__blog-heading">
        <h1 className="gradient__text">A lot is happening right now!</h1>
      </div>
      <div className="mars__blog-container">
        <div className="mars__blog-container_groupA">
          <Article imgUrl = {blog05} date="Dec 29, 2023" title="TitleXYZ"/>
        </div>
        <div className="mars__blog-container_groupB">
          <Article imgUrl = {blog04} date="Dec 15 2023" title="TitleXYZ"/>
          <Article imgUrl = {blog03} date="Nov 26, 2023" title="TitleXYZ"/>
          <Article imgUrl = {blog02} date="Sep 25, 2023" title="TitleXYZ"/>
          <Article imgUrl = {blog01} date="Aug 14, 2023" title="TitleXYZ"/>
        </div>
      </div>
    </div>
  )
}

export default Blog