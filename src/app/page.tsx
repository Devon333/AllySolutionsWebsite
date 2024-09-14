import { Post, allPosts } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';

import Link from "next/link";
import HeaderComponent from "@/components/header-component";
import FooterComponent from "@/components/footer-component";


function PostCard(post: Post){
  return( 
  <div className='mb-8'>
    <h2 className='mb-1 text-xl'>
      <Link href={post.url} className='text-gray-100 hover:text-blue-700'>
        {post.title} 
      </Link>
    </h2>

      <time dateTime={post.date}>
        {format(parseISO(post.date),'LLLL d yyyy')}
      </time>
    <p>{post.summary}</p>

  </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a,b) => 
    compareDesc( new Date(a.date), new Date(b.date))
  );
    //console.log(posts)

  return (
    <div className="flex flex-col min-h-screen text-white max-w-xl mx-auto">
      <HeaderComponent/>
      <div className="flex-grow">
        <h1 className="text-center"> Welcome!</h1>
        <div>Welcome to Ally Solutions we provide metal fabrication and plasma cutting Expertise.
          We specialize in delivering high-quality metal fabrication and plasma cutting 
        services tailored to help you complete your project. With combined years of experience in the industry, our skilled team uses 
        a variety of tools to ensure precise and efficient results. 
        </div>
        <div>
        Get in touch with us today to discuss your project requirements and get a free quote!
        </div>
        {posts.map((post)=> (
          <PostCard {...post} key={post._id} />
        ))}
      </div>
      <FooterComponent/>
    </div>  
  );  
}
