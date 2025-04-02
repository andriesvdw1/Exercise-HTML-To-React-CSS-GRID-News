# HTML To React Layout Exercise  
## Approach used: Styles applied to the Article component: 
```
section{
    display: flex;
    justify-content: space-evenly;
}

article{
    width: 22%;
    border: 1px solid gray;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
}
```
## JavaScript Array Methods Used: Filter and Map.
```
return (
    <>
    <h2>Technology</h2>
      <section>
        
        {articles
          .filter((article) => article.category === "Technology")
          .map((article) => (
            <article key={article.id}>
              <h1>{article.heading}</h1>
              <span>Category: {article.category}</span>
              <span>Active: {article.active}</span>
              <p>{article.text}</p>
            </article>
          ))}
      </section>
```

# Output:
![image](https://github.com/user-attachments/assets/5d94f243-10ca-4ed2-aab1-e036e3818465)  
![image](https://github.com/user-attachments/assets/5cd976f3-3ac4-414a-8863-6951fce50c11)  
![image](https://github.com/user-attachments/assets/61975fc6-7d84-421e-bfd1-9bcdb97cbe26)



