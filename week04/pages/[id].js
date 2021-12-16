import Head from 'next/head';
import Layout from '../components/layout';
import {getAllIds, getData } from '../lib/data';


// create an instance of the getSTatic Props() to return data for one person
export async function getStaticProps({params}){
  const itemData = await getData(params.id);
  return {
    props: {
      itemData
    }
  };
}
//create an instance of the getStaticPaths() to report to next all possible dynamic urls
export async function getStaticPaths(){
  const paths = getAllIds();
  return {
    paths,
    fallback:false
    
  };
}

//make a react component to disoplay all the details about a person when a dynamic route matches

export default function Entry ({itemData}){
  return(
    <Layout>
  <article className="card col-6">
  <div className = "card-body">
  <h5 className="card-title">{itemData.name}</h5>
  <h6 className="card-subtitle mb-2 text-muted">{itemData.phone}</h6>
    <a href= {'mailto:' + itemData.email} className="card-link">{itemData.email}</a>
  </div>
  </article>
  </Layout>
  );
  
}

