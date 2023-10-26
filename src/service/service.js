export const fecthUrl = async () => {
    try {
      const response = await fetch(
        "http://192.168.0.75:8000/ML_response/get-status-health/"
      );
      if (!response.ok) {
        return response;
      } else {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      throw error;
    }
  };