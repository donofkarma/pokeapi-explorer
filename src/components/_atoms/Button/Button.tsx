import Link from 'next/link';
import React from 'react';

import { VARIANTS } from './Button.constants';
import { Props } from './Button.types';
import ButtonView from './Button.view';

const Button: React.FC<Props> = ({ href, type, ...rest }) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <ButtonView {...rest} as="a" />
      </Link>
    );
  }

  return <ButtonView {...rest} as="button" type={type} />;
};

Button.defaultProps = {
  disabled: false,
  type: 'button',
  variant: VARIANTS.PRIMARY,
};

export default Button;
