import json
import boto3
import html
import re

def validate_request(body):
    # Implement your validation logic here
    if not body.get("name") or not body.get("email") or not body.get("message") or not body.get("subject"):
        raise ValueError("Invalid request body")

    if not re.fullmatch(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b', body.get("email")):
        raise ValueError("Invalid email")
    
    return [html.escape(body.get("name")), html.escape(body.get("email")), html.escape(body.get("message")).replace("\n", "<br>"), html.escape(body.get("subject"))]

def lambda_handler(event, context):
    print(event)
    http_method = ""
    if "httpMethod" in event:
        http_method = event["httpMethod"]
    elif "http" in event["requestContext"]:
        http_method = event["requestContext"]["http"]["method"]
    ses = boto3.client('ses')

    # Handle POST request
    if http_method == "POST":
        try:
            # Retrieve the request"s body and parse it as JSON
            [name, email, message, subject] = validate_request(json.loads(event["body"]))
            email_body = f"""
                <html>
                    <body>
                        <span style="color: gray">{name}</span> 
                        <br/>
                        <br/>
                        {message}
                    </body>
                </html>
            """
            ses.send_email(
                Source="kovalikadam00@gmail.com",
                ReplyToAddresses=[email],
                Destination={
                    "ToAddresses": ["kovalikadam00@gmail.com"]
                },
                Message={
                    "Subject": {"Data": subject},
                    "Body": {"Html": {'Data': email_body}}
                }
            )

            response = {
                "statusCode": 200,
                "body": json.dumps({"success": True})
            }
            return response
        except Exception as e:
            print(f"Error processing request: {e}")
            return {"statusCode": 500, "body": json.dumps({"success": False, "error": str(e)})}

    elif http_method == "OPTIONS":
        response = {
            "statusCode": 200,
        }
        return response

    else:
        # Return an error message for unsupported methods
        response = {
            "statusCode": 405,
            "body": json.dumps({"error": "Method not allowed"})
        }
        return response
