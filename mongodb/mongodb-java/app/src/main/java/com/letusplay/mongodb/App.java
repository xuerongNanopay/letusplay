/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package com.letusplay.mongodb;

import com.mongodb.client.*;
import org.bson.Document;

public class App {
  public String getGreeting() {
    return "Check Tests";
  }

  public static void main(String[] args) {
    System.out.println(new App().getGreeting());
  }
}
