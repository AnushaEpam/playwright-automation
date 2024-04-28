import { request, APIRequestContext } from '@playwright/test'
import defineConfig from "../../playwright.config"


// Function to initialize and return the API context with default headers
export async function initApiContext(){
  
    let baseURL = defineConfig.use?.baseURL
 const apiContext = await request.newContext(
    { 
        baseURL: baseURL, 
        extraHTTPHeaders: 
            { 
                'Content-Type': 'application/json', 
                'api_key': 'special-key', 
            }, 
    }); 
    return apiContext; 
}