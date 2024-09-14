import { format, parseISO } from 'date-fns';
import { allPosts } from "contentlayer/generated";
//import { getMDXComponent } from 'next-contentlayer2/hooks';
import Mdx from '@/components/mdx-components';
import FooterComponent from '@/components/footer-component';
import HeaderComponent from '@/components/header-component';



interface PostPageProps{
    params:{
        slug: string;
    };
}

export default function PostPage( {params }: PostPageProps){
    const post = allPosts.find(post => post._raw.flattenedPath === params.slug)

    if(!post?.body.code){
        return<div>No post here!</div>
    }
    //const Content= getMDXComponent(post.body.code);
    return (
      <article className='text-white py08 mx-auto max-w-xl'>
        <HeaderComponent/>
        <div className='mb-8 text-center'>
          <time dateTime={post.date}>
            {format(parseISO(post.date),'LLLL d yyyy')}
          </time>
          <h1> {post.title} </h1>
        </div>
        <Mdx code={post.body.code}/>
        <footer/>
        {/*<div className='text-sm [&>*:mb3 [&>*:last-child]:mb-0'
        dangerouslySetInnerHTML={{__html:post.body.html}}/> */}
        <FooterComponent/>
      </article>
    );
}