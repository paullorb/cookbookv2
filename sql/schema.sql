CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  recipe_id TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT[] NOT NULL,
  instructions TEXT[] NOT NULL,
  picture_url TEXT NOT NULL
);
```