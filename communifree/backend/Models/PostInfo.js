import {pool} from '../db/index.js'

export async function getAllPosts() {
  try{
    const query = "SELECT * FROM post_info";
    const result = await pool.query(query);
  
    return result.rows;
  } 
  catch(error){
    console.log('there was an error', error)
    throw error; 
  }
  }

  export async function getPostByID(post_id) {
    try{
        const values = [post_id]
        const query = "SELECT * FROM post_info WHERE post_id = $1";
        const result = await pool.query(query, values);
    
      return result.rows;
    } 
    catch(error){
      console.log('there was an error', error)
      throw error; 
    }
    }

export async function getPostByCustomerID(customer_id) {
    try{
        const values = [customer_id]
        const query = "SELECT * FROM post_info WHERE customer_id = $1";
        const result = await pool.query(query, values);
        
        return result.rows;
    } 
    catch(error){
        console.log('there was an error', error)
        throw error; 
    }
    }

export async function getPostByTitle(title) {
    try{
        const values = [title]
        const query = "SELECT * FROM post_info WHERE title = $1";
        const result = await pool.query(query, values);
            
        return result.rows;
    } 
    catch(error){
        console.log('there was an error', error)
        throw error; 
    }
    }

    export async function getPostByDescription(description) {
        try{
            const values = [description]
            const query = "SELECT * FROM post_info WHERE description = $1";
            const result = await pool.query(query, values);
        
          return result.rows;
        } 
        catch(error){
          console.log('there was an error', error)
          throw error; 
        }
        }

export async function getPostByLocation(location) {
    try{
        const values = [location]
        const query = "SELECT * FROM post_info WHERE location = $1";
        const result = await pool.query(query, values);
            
        return result.rows;
    } 
    catch(error){
        console.log('there was an error', error)
        throw error; 
    }
    }

export async function deletePostByPostID(post_id) {
    try{
        const values = [post_id]
        const query = "DELETE FROM post_info WHERE post_id = $1";
        const result = await pool.query(query, values);
                
        return result.rows;
    } 
    catch(error){
        console.log('there was an error', error);
        throw error; 
    }
    }

export async function createNewPost(data) {
    const values = [data.post_id, data.customer_id, data.title, data.description, data.location];
    const query = "INSERT INTO post_info (post_id, customer_id, title, description, location) VALUES ($1, $2, $3, $4, $5)";
    const result = await pool.query(query, values);

    return result.rows;
}