import { local } from "../../core/helpers/localstorage";
import { useEffect, useState } from "react";

export const useLogin = () => {
  const [token, setToken] = useState<string | null | undefined>(null);

  useEffect(() => {
    const localToken: string | null | undefined = local("token");

    setToken(localToken);
  }, []);

  return [token !== null && token !== undefined, token];
};
