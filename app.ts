const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';


interface GetDataType {
  postId: number
  id: number
  name: string
  email: string
  body: string
}


const getData = async (url : string): Promise<GetDataType[]> => {
 const response = await fetch(url)
 return response.json()
}

getData(COMMENTS_URL)
  .then(data => {
    data.forEach(({id, email}) => {
      console.log(`ID: ${id}, Email: ${email}`)
    })
  })


/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */