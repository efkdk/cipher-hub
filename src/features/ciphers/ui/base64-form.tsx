import React from 'react';
import { CipherForm } from '@/features/ciphers/ui/cipher-form';
import { useCipherForm } from '@/features/ciphers/lib/hooks/useCipherForm';
import { base64 } from '@/features/ciphers/lib';
import { BaseFormScheme } from '@/features/ciphers/model/schema';

export const Base64Form = () => {
  const formHook = useCipherForm({
    schema: BaseFormScheme,
    defaultValues: { text: '', action: 'encode' },
    processFunction: base64,
  });

  return <CipherForm formHook={formHook} renderFields={<></>} />;
};
