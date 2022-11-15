import {getCategories, getPosts} from "./api";
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';
import Link from 'next/link'

export default function Home({posts, categories}) {
  return (
    <Layout>
            <select className="select w-full max-w-xs">
                <option disabled selected>Catégorie</option>
                {
                    categories.map((category, index) => (
                        // eslint-disable-next-line react/jsx-key
                        <option id={index}>
                            {category.node.name}
                        </option>
                    ))
                }
            </select>
            {
                posts.map((post,index) => (
                    <div className="card w-96 bg-primary text-primary-content" key={index}>
                        <div className="card-body">
                            <h2 className="card-title">{post.node.title}</h2>
                            <p dangerouslySetInnerHTML={{__html:post.node.excerpt}} />
                            <p>By {post.node.author.node.name}</p>
                            <p>Categorie : {post.node.categories.edges.map((postCategory, indexCat) => (
                                // eslint-disable-next-line react/jsx-key
                                <span> {postCategory.node.name},</span>
                            ))}</p>
                        </div>
                    </div>
                ))
            }
    </Layout>
  )
}

export async function getServerSideProps(ctx){
    let posts = await getPosts();
    let categories = await getCategories();
    return {
        props:{
            posts,
            categories
        }
    }
}