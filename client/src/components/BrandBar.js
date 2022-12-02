import { observer } from 'mobx-react-lite';
import React from 'react';
import { Context } from '../index';
import { Card } from 'react-bootstrap';
import { useContext } from 'react';

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <div className="d-flex flex-wrap">
            {device.brands.map(brand =>
                <Card
                    key={brand.id}
                    className="p-3"
                    style={{cursor: "pointer"}}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? "danger" : "lignt"} 
                >
                    {brand.name}
                </Card>
            )}
        </div>
    );
});

export default BrandBar;