export default (req: any, res: any) => {
  // Clears the preview mode cookies.
  // This function accepts no arguments.
  res.clearPreviewData()
  res.redirect('/')
}