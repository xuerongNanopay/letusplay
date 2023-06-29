package com.letusplay.mongodb;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.result.InsertOneResult;
import org.bson.Document;
import org.junit.jupiter.api.Test;

public class MongodbInsertion {

  String MONGO_URL = "mongodb://root:123456@localhost:27017/payment?authSource=admin";

  public static Document generateMongDoc(String json) {
    return Document.parse(json);
  }

  @Test
  public void testInsertOneFromJson() {
    String tes1 = "{class: \"com.foam.Bar\", \"foo\": \"{}\", \"bar\": {aa: 1, bb: true, cc:1.11}}";

    System.out.println(new App().getGreeting());
    try ( MongoClient mongoClient = MongoClients.create(MONGO_URL) ) {
      MongoDatabase database = mongoClient.getDatabase("mongodb-java");
      MongoCollection<Document> analyticEventCollection = database.getCollection("analyticEvent");
      InsertOneResult insertOneResult = analyticEventCollection.insertOne(generateMongDoc(tes1));
      System.out.println(insertOneResult.getInsertedId());
    }
  }

  @Test
  public void testInsertOneFromDocument() {
    Document document = new Document();
    document.put("class", "com.foam.Foo");
    document.put("nested", new Document().append("cc", true));
    System.out.println(new App().getGreeting());
    try ( MongoClient mongoClient = MongoClients.create(MONGO_URL) ) {
      MongoDatabase database = mongoClient.getDatabase("mongodb-java");
      MongoCollection<Document> analyticEventCollection = database.getCollection("analyticEvent");
      InsertOneResult insertOneResult = analyticEventCollection.insertOne(document);
      System.out.println(insertOneResult.getInsertedId());
    }
  }
}
