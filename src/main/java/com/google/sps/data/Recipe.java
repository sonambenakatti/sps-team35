package com.google.sps.data;

/** A recipe and its attributes. */
public final class Recipe {

  private final long id;
  private final String title;
  private final String link;
  //private final int likes;
  private final String category;

  public Recipe(long id, String title, String link, String category) {
    this.id = id;
    this.title = title;
    this.link = link;
    //this.likes = likes;
    this.category = category;
  }
}
