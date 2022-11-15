import {getPosts} from "./api";
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';
import Link from 'next/link'

export default function Home({posts}) {
  return (
    <Layout>
        <h1 className={styles.title}>
          Formulaire de contact
        </h1>
        <main>
            {
                posts.map((post,index) => (
                    <div key={index}>

                        <Link href={`/posts/${post.node.id}`}>
                            {post.node.title}
                        </Link>

                        <div dangerouslySetInnerHTML={{__html:post.node.excerpt}} />

                        <p>By {post.node.author.node.name}</p>
                    </div>
                ))
            }
        </main>
    </Layout>
  )
}

export async function getServerSideProps(ctx){
    let posts = await getPosts();
    return {
        props:{
            posts
        }
    }
}