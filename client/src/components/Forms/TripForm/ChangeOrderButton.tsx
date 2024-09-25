import CircleButton from '@/components/Buttons/CircleButton';
import React from 'react';
import { FaExchangeAlt } from 'react-icons/fa';

export default function ChangeOrderButton() {
  return (
    <div>
      <CircleButton label="" icon={<FaExchangeAlt />} />
    </div>
  );
}
