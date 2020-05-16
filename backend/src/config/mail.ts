interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      name: string;
      email: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      name: 'Luiz Fernando',
      email: 'luiz@luizferk.dev',
    },
  },
} as IMailConfig;
