import MyComputersCard from '@/components/MyComputersCard';
import { MarketplaceContext } from '@/context/marketplaceContext';
import { Computer } from '@/typings';
import { useContext } from 'react';

const Mycomputers = () => {
    const { myProducts } = useContext(MarketplaceContext);

  return (
    <div className="bg-white rounded-lg">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold pb-10">My Computers</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {myProducts.map((computer: Computer) => (
            <MyComputersCard computer={computer} key={computer.index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mycomputers