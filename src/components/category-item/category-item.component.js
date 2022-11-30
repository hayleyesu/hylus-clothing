import './category-item.styles.scss';

const CategoryItem = ({category}) => {
    const {title,imageUrl,id}=category;
   return(
    <div className='category-container'>
      <div className="background-image" style={{
        backgroundImage:`url(${imageUrl})`
      }}></div>
      <div key='id'className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
        </div> 
      </div>
  );
   }

export default CategoryItem