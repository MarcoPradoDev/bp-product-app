import React from 'react';
import { render } from '@testing-library/react-native';
import { IFinancialProduct } from '../src/data/entities/ProductModel';
import FinancialProducList from '../src/ui/components/List/FinancialProducList';
import { StatusService } from '../src/utils/helpers';

describe('Product List Component', () => {
  it('debe renderizar la lista de los productos', () => {
    const test: IFinancialProduct[] = [
      {
        "id": "seis",
        "name": "Nombre producto",
        "description": "Descripción producto",
        "logo": "https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/find-a-card/other/mc-standard-card-1280x720.png",
        "date_release": "2025-01-01",
        "date_revision": "2025-01-01"
      }
    ];
    const { getAllByTestId } = render(<FinancialProducList data={test} onPress={() => { }} statusRes={{ status: StatusService.SUCCESS }} />);

    // Verificar que todos los items estan renderizados
    const renderedItems = getAllByTestId('item-product');
    expect(renderedItems.length).toEqual(test.length);
  });
});