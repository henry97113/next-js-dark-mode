import React from 'react';
import { clsx } from 'clsx';

import styles from './VisuallyHidden.module.css';

function VisuallyHidden({
  as: Tag = 'span',
  children,
  className,
  ...delegated
}) {
  return (
    <Tag className={clsx(styles.wrapper, className)} {...delegated}>
      {children}
    </Tag>
  );
}

export default VisuallyHidden;
