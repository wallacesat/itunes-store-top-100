export const handleOpenExternalLink = (link: string): void => {
  if (typeof window !== 'undefined') {
    window.open(link);
  }
};

export default handleOpenExternalLink;
