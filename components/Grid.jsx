import { gridItems } from '../data/index';
import { BentoGrid, BentoGridItem } from '../components/ui/BentoGrid';

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => {
          console.log('item', item);

          return (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          );
        })}
      </BentoGrid>
    </section>
  );
};

export default Grid;
