import { validateSync } from 'class-validator';

function convertToBoolean(value: unknown): boolean | undefined {
  if (value === undefined || value === null || value === '') {
    return undefined;
  }

  if (typeof value === 'boolean') {
    return value;
  }

  const normalizedValue = String(value).trim().toLowerCase();

  if (['true', '1', 'yes', 'on'].includes(normalizedValue)) {
    return true;
  }

  if (['false', '0', 'no', 'off'].includes(normalizedValue)) {
    return false;
  }

  return undefined;
}

function formatValidationErrors(errors: ReturnType<typeof validateSync>): string[] {
  return errors.flatMap((error) => {
    const property = error.property ?? 'unknown';
    const constraints = error.constraints ? Object.values(error.constraints) : [];
    const currentMessages = constraints.map((message) => `${property}: ${message}`);
    const childMessages = error.children?.length ? formatValidationErrors(error.children as ReturnType<typeof validateSync>) : [];

    return [...currentMessages, ...childMessages];
  });
}

export const configValidationUtility = {
  validateConfig<T extends object>(config: T): T {
    const validationErrors = validateSync(config as object, {
      skipMissingProperties: false,
    });

    if (validationErrors.length > 0) {
      const messages = formatValidationErrors(validationErrors);

      throw new Error(`Configuration validation failed:\n- ${messages.join('\n- ')}`);
    }

    return config;
  },
  convertToBoolean,
};
