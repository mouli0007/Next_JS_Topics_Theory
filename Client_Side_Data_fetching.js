				
##################################################

######################### Client Side Data Fetching ###############################

###################################################


1=> It is Used when the data is changing wit High frequency
2=> not helps in SEO



####### use of useSWR Hook To implement Client side data fetching ##########

Syntax ## 

useSWR => it revalidates and fetches the latest data

import useSWR from 'swr'
 
function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}

########### If You want to do both client side fetching and  pre-generate the initial page ############

######### you have to use getStaticProps()

export const getStaticProps = async () => {
  try {
    const response = await fetch("URL");
    const data = await response.json();
    return {
      props: {
        data,
      },
      revalidate: 10,
    };
  } catch (err) {
    console.log(err);
  }
};
