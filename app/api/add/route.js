import clientPromise from "@/lib/mongodb"


export async function POST(request) {
    const body = await request.json()

    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")

    const result = await collection.insertOne(body)
     
    return Response.json({ success: true, error: false, message: 'Your Bittree has been generated!', result: result,  })
  }