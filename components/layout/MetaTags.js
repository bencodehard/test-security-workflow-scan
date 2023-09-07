import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


const MetaTags = ({page_title, page_description}) => {
    const router = useRouter()
    const [page_url, setPage_url] = useState('')

    const img = "https://web-dev.vekin.io/metaImage.jpg"

    useEffect(() => {
        setPage_url(`${window.location.origin}${router?.pathname}`)
    }, [router?.pathname]);
  
    return ( 
        <Head>
            <title>{page_title}</title>

            <link rel="icon shortcut" href="/favicon.ico" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" charSet="UTF-8"/>
            
            <meta property="viewport" content="width=device-width, initial-scale=1.0"/>
		    <meta property='robots' content='index' />
            <meta property="title" content={page_title} />
            <meta property="description" content={page_description} />
            <meta property="image" content={img} />
    
            <meta property="og:type" content="website"/>
            <meta property='og:site_name' content='vekin'/>
            <meta property="og:url" content={page_url}/>
            <meta property="og:title" content={page_title} />
            <meta property="og:description" content={page_description} />
            <meta property="og:image" content={img}></meta>
            	
            {/* <meta name="og:image" content={img}></meta> */}
    
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={page_url}/>
            <meta property="twitter:title" content={page_title}/>
            <meta property="twitter:description" content={page_description}/>
            <meta property="twitter:image" content={img} />


        </Head>
     );
}
 
export default MetaTags;