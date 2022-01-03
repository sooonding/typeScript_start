import React from 'react';
import { Address } from './interfaces/interfaces';

interface InlineDocumentationTsProps {
  address: Address;
}

const InlineDocumentationTs = ({ address }: InlineDocumentationTsProps) => {
  return <p>{address.street}</p>;
};

export default InlineDocumentationTs;
