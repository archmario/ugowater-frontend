'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { products } from '@/constants/products';
import { formatNaira } from '@/utils/format';

export interface OrderFormValues {
  name: string;
  phone: string;
  city: string;
  productId: string;
  quantity: string;
  address: string;
}

const emptyForm: OrderFormValues = {
  name: '',
  phone: '',
  city: '',
  productId: '',
  quantity: '',
  address: '',
};

function buildOrderMessage(values: OrderFormValues) {
  const product = products.find((p) => p.id === values.productId);
  const productLine = product
    ? `${product.name} (${product.size}) - ${formatNaira(product.price)}`
    : values.productId;

  return [
    `Hello ${siteConfig.name}, I'd like to place an order.`,
    '',
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Product: ${productLine}`,
    `Quantity: ${values.quantity}`,
    `City: ${values.city}`,
    `Delivery address: ${values.address}`,
  ].join('\n');
}

// No backend yet: submitting opens WhatsApp with the order filled in,
// and the customer sends it to the business from their own phone.
export function useOrderForm() {
  const [values, setValues] = useState<OrderFormValues>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const setField = (field: keyof OrderFormValues, value: string) =>
    setValues((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(buildOrderMessage(values));
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, '_blank', 'noopener');
    setSubmitted(true);
  };

  const reset = () => {
    setValues(emptyForm);
    setSubmitted(false);
  };

  return { values, setField, submitted, handleSubmit, reset };
}
