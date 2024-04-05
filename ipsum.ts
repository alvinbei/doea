import { Response } from 'express';

function sendJsonResponse(res: Response): void {
  // Assuming 'res' is of type 'Response' from the 'express' library
  // The 'json' method sends a JSON response with the correct content-type
  const jsonResponse = res.json();
  
  // The function doesn't return anything, hence the return type is 'void'
  return jsonResponse;
}
