import React, { useState } from "react"
import { Modal, IconButton, Box, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from "@mui/icons-material/Fullscreen"

const Certificate = ({ ImgSertif, Title, Description }) => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<Box component="div" sx={{ width: "100%" }}>
			{/* Thumbnail Container */}
			<Box
				sx={{
					position: "relative",
					overflow: "hidden",
					borderRadius: 2,
					boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
					transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
					cursor: "pointer",
					"&:hover": {
						transform: "translateY(-5px)",
						boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
						"& .overlay": {
							opacity: 1,
						},
						"& .hover-content": {
							transform: "translate(-50%, -50%)",
							opacity: 1,
						},
					},
				}}
				onClick={handleOpen}>
				{/* Certificate Image */}
				<img
					src={ImgSertif}
					alt={Title || "Certificate"}
					style={{
						width: "100%",
						height: "auto",
						display: "block",
						objectFit: "cover",
						aspectRatio: "16/11.5",
					}}
				/>

				{/* Title di bawah gambar */}
				{Title && (
					<Box
						sx={{
							position: "absolute",
							bottom: 0,
							left: 0,
							right: 0,
							p: 1.5,
							background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
							color: "white",
						}}>
						<Typography variant="body2" sx={{ fontWeight: 600 }}>
							{Title}
						</Typography>
					</Box>
				)}

				{/* Hover Overlay */}
				<Box
					className="overlay"
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						opacity: 0,
						transition: "all 0.3s ease",
						backgroundColor: "rgba(0,0,0,0.6)",
						zIndex: 2,
					}}>
					{/* Hover Content */}
					<Box
						className="hover-content"
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -60%)",
							opacity: 0,
							transition: "all 0.4s ease",
							textAlign: "center",
							color: "white",
						}}>
						<FullscreenIcon sx={{ fontSize: 40, mb: 1 }} />
						<Typography variant="h6" sx={{ fontWeight: 600 }}>
							View Certificate
						</Typography>
					</Box>
				</Box>
			</Box>

			{/* Modal */}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="certificate-modal"
				BackdropProps={{
					sx: {
						backgroundColor: "rgba(0, 0, 0, 0.95)",
						backdropFilter: "blur(5px)",
					},
				}}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<Box
					sx={{
						position: "relative",
						maxWidth: "90vw",
						maxHeight: "90vh",
						outline: "none",
					}}>
					{/* Close Button */}
					<IconButton
						onClick={handleClose}
						sx={{
							position: "absolute",
							right: 16,
							top: 16,
							color: "white",
							bgcolor: "rgba(0,0,0,0.6)",
							zIndex: 3,
							"&:hover": {
								bgcolor: "rgba(0,0,0,0.8)",
								transform: "scale(1.1)",
							},
						}}>
						<CloseIcon />
					</IconButton>

					{/* Modal Image dengan Info */}
					<Box sx={{ position: "relative" }}>
						<img
							src={ImgSertif}
							alt={Title || "Certificate Full View"}
							style={{
								display: "block",
								maxWidth: "100%",
								maxHeight: "90vh",
								objectFit: "contain",
							}}
						/>
						
						{/* Title dan Description di Modal */}
						{(Title || Description) && (
							<Box
								sx={{
									position: "absolute",
									bottom: 0,
									left: 0,
									right: 0,
									p: 3,
									background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
									color: "white",
									textAlign: "center",
								}}>
								{Title && (
									<Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
										{Title}
									</Typography>
								)}
								{Description && (
									<Typography variant="body1" sx={{ opacity: 0.9 }}>
										{Description}
									</Typography>
								)}
							</Box>
						)}
					</Box>
				</Box>
			</Modal>
		</Box>
	)
}

export default Certificate