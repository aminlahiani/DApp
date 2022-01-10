import { Box, Container, Typography , Avatar } from '@mui/material'
import React from 'react'
//import { CheckCircleOutlined as CheckCircleOutlinedIcon } from '../../../icons/check-circle-outlined';
import { Users as UsersIcon } from '../../../icons/users';
import { Star as StarIcon } from '../../../icons/star';
import { Template as TemplateIcon } from '../../../icons/template';
export const Featuring = (props) => {
    return (
        <Box sx={{ py: 8 , backgroundColor: 'background.paper' }}>
        <Container
          maxWidth="md"
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              md: 'row'
            },
            px: 3
          }}
        >
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Avatar
              sx={{
                backgroundColor: 'primary.main',
                height: 40,
                mb: 2,
                width: 40
              }}
              variant="rounded"
            >
              <UsersIcon fontSize="small" />
            </Avatar>
            <Typography
              
                color='textPrimary'
                textAlign='center'
              
              variant="h4"
            >
              4.5k+
            </Typography>
            <Typography
               color='textPrimary'
              variant="overline"
            >
              Happy customers
            </Typography>
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Avatar
              sx={{
                backgroundColor: 'secondary.main',
                height: 40,
                mb: 2,
                width: 40
              }}
              variant="rounded"
            >
              <StarIcon fontSize="small" />
            </Avatar>
            <Typography
               color='textPrimary'
               textAlign='center'
              variant="h4"
            >
              4.9/5
            </Typography>
            <Typography
               color='textPrimary'
               textAlign='center'
              variant="overline"
            >
              CUSTOMER Rating
            </Typography>
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Avatar
              sx={{
                backgroundColor: 'warning.main',
                height: 40,
                mb: 2,
                width: 40
              }}
              variant="rounded"
            >
              <TemplateIcon fontSize="small" />
            </Avatar>
            <Typography
                color='textPrimary'
                textAlign='center'
              variant="h4"
            >
              UX
            </Typography>
            <Typography
              color='textPrimary'
              textAlign='center'
              variant="overline"
            >
              complete flows
            </Typography>
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Avatar
              sx={{
                backgroundColor: 'info.main',
                height: 40,
                mb: 2,
                width: 40
              }}
              variant="rounded"
            >
              <UsersIcon fontSize="small" />
            </Avatar>
            <Typography
               color='textPrimary'
               textAlign='center'
              variant="h4"
            >
              $10k+
            </Typography>
            <Typography
               color='textPrimary'
               textAlign='center'
              variant="overline"
            >
              In people hours saved
            </Typography>
          </Box>
        </Container>
      </Box>
    )
}


