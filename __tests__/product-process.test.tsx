import { act, renderHook, waitFor } from '@testing-library/react-native';
import useFinancialProducts from '../src/hooks/useFinancialProducts';

it('How to add a product', async () => {
  const { result } = renderHook(() => useFinancialProducts());

  await waitFor(async () => {
    const validProduct = await result.current.validProductId('ocho');
    if (!validProduct.isIdExist) {
      const res = await result.current.createProduct({
        "id": "ocho",
        "name": "Nombre producto",
        "description": "Descripción producto",
        "logo": "https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/find-a-card/other/mc-standard-card-1280x720.png",
        "date_release": "2025-01-01",
        "date_revision": "2025-01-01"
      });
      expect(res).toBe({ isSuccess: true, message: '' });
    }
  }, { interval: 3000 });
})

it('should get bpProductInfo', async () => {
  const { result } = renderHook(() => useFinancialProducts());

  expect(result.current.bProduct).toBe(undefined);
  await waitFor(async () => {
    await result.current.getProductById('cuatro');
    expect(result.current.bProduct?.id).toBe('cuatro');
  });
});

